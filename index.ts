import log from "loglevel";
import { testPuppeteer } from "./test-pupeteer";
import config from "./config/config";

async function main() {
    log.setLevel(config.debugLevel)
    
    try {
        await testPuppeteer()
    } catch (e) {
        log.error(`main function: ${e}`)
    }
}

main()

