import { Info } from './Info'
import { Character } from './Character'

export interface PublicResponseApi {
    info: Info,
    results: Character[]
}