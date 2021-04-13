const _ = require('underscore')

const GAMEID = 2225                       
const GAME_TITLE = 'Demon\'s Soul'
const GAME_TITLE_DUPLICATES = 'DUPLICATES';

describe('Datasources', () => {
    test('Can discover and save datasources into the database', () => {
        let repo = new GameMetadataRepository()
        let logger = new Logger()

        GoogleWeb.discoverMetadataSources({
            gameTitle: GAME_TITLE,
            scraper : new Scraper({logger}),            
            repository : repo,
            logger
        }).then(sites => {
            repo.addSources ({
                sites,
                id: GAMEID
            })
        }).then(result => {
            return repo.getGameMetadata({ id : GAMEID })            
        }).then(metaData => {
            expect(metaData.sources.toEqual(50))
        })
    })    

    test('Does not add multiple datasources with the same url', () => {
        let sites = []
        repo.addMetadataSourcesToGame({
            sites,
            id: GAMEID
        })
    }
})