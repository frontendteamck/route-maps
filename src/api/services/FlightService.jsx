import CoreApi from './CoreApi';


let endpoint = '';

class FlightService extends CoreApi {
    constructor(endpoint) {
        super();
        this.endpoint = endpoint;
        this.setEndpointUrl(this.endpoint);
    }




    getCodes() {
        return this.api.get('forms/flight-booking-selector/')
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                throw err
            })
    }

    getFlights(orgin, destination, from, to){

        return this.api.get(`/flights/from/${orgin}/to/${destination}/${from}/${to}/250/unique/?limit=15&offset-0`)
            .then(resp => {
                return resp.data
            })
            .catch(err => {
                throw err
            })
    }


}

export default new FlightService(endpoint);
