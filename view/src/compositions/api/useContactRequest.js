import {requestRoutes} from "@/helpers/requestRoutes.js";
import {useRequest} from "@/compositions/useRequest.js";
import {useContacts} from "@/compositions/state/useContacts.js";
const {apiRequest} = useRequest()

const {setContacts} = useContacts()

export function useContactRequest () {
    async function fetchContacts() {
        return await apiRequest({
            method: requestRoutes.CONTACTS.GET.method,
            route: requestRoutes.CONTACTS.GET.url

        }).then(({data, status}) => {
            setContacts(data)

            return {data, status}

        }).catch(err => {
            console.log('fetchContacts error', err)
        })
    }
    return {
        fetchContacts
    }
}