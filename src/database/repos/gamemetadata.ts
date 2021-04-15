import GameMetadataModel from '../models/gamemetadata'

export default class GameMetaDataRepository {
    model: GameMetadataModel
    
    constructor( model : GameMetadataModel ) {
        this.model = model
    }

    addMetaSource( url : string ) {

    }

    getSourcesById(id : number) {

    }
} 