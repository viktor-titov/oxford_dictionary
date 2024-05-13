import { load } from "cheerio";
import { writeFile } from "fs";
import log from "loglevel";
import puppeteer, { Page } from "puppeteer";

export const testPuppeteer = async () => {
    try {
        // Launch the browser and open a new blank page
        let browser = await puppeteer.launch({
            headless: false,
            timeout: 60_000,
            executablePath: '/usr/bin/google-chrome',
        });
        log.info("launch browser")

        const page = await browser.newPage();

        // Navigate the page to a URL
        await page.goto('https://www.oxfordlearnersdictionaries.com/', {
            timeout: 60_000,
            waitUntil: "load"
        });

        // Set screen size
        await page.setViewport({ width: 1080, height: 1024 });

        const element = await page.waitForSelector('.searchfield_input');

        await element.type("set")
        await page.keyboard.press("Enter")


        const htmlSnippet = await htmlSnippetBySelector(page, '#relatedentries.responsive_row')

        const entries = getRelatedEntries(htmlSnippet);

        await writeJson(JSON.stringify(entries), 'related_entries')

        log.debug("wait 5s")
        await (new Promise((r) => setTimeout(r, 5000)))

        await browser.close();
    } catch (e) {
        log.error(`testPuppeteer function: ${e}`)
        throw e
    } finally {
    }
}


// Получить кусочек html по селектору.
async function htmlSnippetBySelector(page: Page, selector: string): Promise<string | null> {
    log.debug("snippetHtmlBySelector selector:", selector)

    const element = await page.waitForSelector(selector);

    return element.evaluate((elm) => {
        if (!elm || !elm.innerHTML) {
            log.info("Don't find html snippet by query selector: ", selector)
            return null;
        }
        return elm.innerHTML;
    })
}

// Сохранить в json файл.
async function writeJson(jsonString: string, nameFile: string) {
    writeFile(`./${nameFile}.json`, jsonString, err => {
        if (err) {
            log.error('Error writing file', err)
        } else {
            log.info(`Save file ${nameFile}`)
        }
    })
}

interface RelatedEntries {
    /** lint to page in oxford dictionary */
    link: string;

    /** phrase|word */
    phrase: string;

    /** Part of speech */
    pos?: string;
}

function getRelatedEntries(htmlSnippet: string): RelatedEntries[] {
    log.debug("getting related entries by parsing html snippet")

    const entries: RelatedEntries[] = []
    const $ = load(htmlSnippet)

    const li = $("li")
    li.each((index, e) => {
        const $ = load(e)
        const pos = $('pos').text().trim()
        $('pos').remove()

        const entry: RelatedEntries = {
            link: $('a').attr('href'),
            phrase: $.text().trim(),
            ...(pos.length ? {pos} : {})
        }
        entries.push(entry)
    })
    
    return entries;
}