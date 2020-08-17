const PUBLIC_API_BASE_URL = 'https://rickandmortyapi.com/api';

class PublicAPIService {

    async getPablicApi({ url }: { url: string }) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        return await response.json();
    }

    getFirstPageCharacter() {
        const url = `${PUBLIC_API_BASE_URL}/character`;
        return this.getPablicApi({ url: url }).then((data) => data)
    }

    getOthersPageCharacter({ url }: { url: string }) {
        return this.getPablicApi({ url: url }).then((data) => data)
    }

}

export default new PublicAPIService();