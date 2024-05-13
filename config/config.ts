import { LogLevelDesc } from "loglevel";

export interface Config {
    /** Уровень логирования. */
    debugLevel: LogLevelDesc

}

const config: Config = {
    debugLevel: "debug"
}

export default config