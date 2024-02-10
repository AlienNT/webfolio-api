import {useRequest} from "@/compositions/useRequest.js";
import {requestRoutes} from "@/helpers/requestRoutes.js";
import {useWorks} from "@/compositions/state/useWorks.js";

const {apiRequest} = useRequest()

const {setWorks, addWork, updateWork, removeWork} = useWorks()

export function useWorkRequest() {
    async function fetchWorks() {
        return await apiRequest({
            method: requestRoutes.WORKS.GET.method,
            route: requestRoutes.WORKS.GET.url

        }).then(({data, status}) => {
            setWorks(data)

            return {data, status}

        }).catch(err => {
            console.log('fetchWorks error', err)
        })
    }

    async function createWork(work) {
        return await apiRequest({
            method: requestRoutes.WORKS.CREATE.method,
            route: requestRoutes.WORKS.CREATE.url,
            body: work

        }).then(({data, status}) => {
            addWork(data)

            return {data, status}

        }).catch(err => {
            console.log('createWork error', err)
        })
    }

    async function patchWork(id, work) {
        return await apiRequest({
            method: requestRoutes.WORKS.UPDATE.method,
            route: requestRoutes.WORKS.UPDATE.url(id),
            body: work

        }).then(({data, status}) => {
            updateWork(data)

            return {data, status}

        }).catch(err => {
            console.log('patchWork error', err)
        })
    }

    async function deleteWork(id) {
        return await apiRequest({
            method: requestRoutes.WORKS.DELETE.method,
            route: requestRoutes.WORKS.DELETE.url(id)

        }).then(({data, status}) => {
            removeWork(id)

            return {data, status}

        }).catch(err => {
            console.log('deleteWork error', err)
        })
    }

    return {
        fetchWorks,
        createWork,
        patchWork,
        deleteWork
    }
}