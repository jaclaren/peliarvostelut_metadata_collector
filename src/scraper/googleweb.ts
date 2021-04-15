import Scraper from "./scraper";
import GameMetadataRepository from "../database/repos/gamemetadata";

interface GoogleWebConfig {
    gameTitle : string,
    scraper : Scraper,
    repository: GameMetadataRepository,
    logger : any
}

export default class GoogleWeb {
    discoverMetadataSources(config : GoogleWebConfig) {
        let {gameTitle, scraper, repository, logger} = config
    }    
}
