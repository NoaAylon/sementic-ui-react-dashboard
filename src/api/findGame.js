export function findGame(status, reason) {

    return new Promise((resolve, reject) => {
        fetch(`/game/${status}&${reason}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject(error))
    })
}