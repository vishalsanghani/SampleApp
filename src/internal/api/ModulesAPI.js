import APIService from "./APIService";

class ModulesAPI {
    getCategory() {
        return new Promise((resolve, reject) => {
            APIService.getCategory()
              .then((result) => resolve(result))
              .catch(e => reject(e));
        })

    }

    getProducts() {
        return new Promise((resolve, reject) => {
            APIService.getProducts()
              .then((result) => resolve(result))
              .catch(e => reject(e));
        })

    }

    getBanner() {
        return new Promise((resolve, reject) => {
            APIService.getBanner()
              .then((result) => resolve(result))
              .catch(e => reject(e));
        })
    }
}

export default new ModulesAPI();
