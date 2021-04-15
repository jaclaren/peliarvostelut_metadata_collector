const _ = require('underscore')

const GameMetadataRepository = require('../../dist/database/repos/gamemetadata')
const GameMetadataModel = require('../../dist/database/models/gamemetadata')

const GAMEID = 2225                       
const GAME_TITLE = 'Demon\'s Soul'

describe('Datasources', () => {
    test('Can discover and add datasources under the correct database entries', () => {
        let repo = new GameMetadataRepository(GameMetadataModel)
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
    })
})