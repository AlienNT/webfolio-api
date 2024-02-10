import {useRequest} from "../useRequest.js";
import {useSkills} from "../state/useSkills.js";
import {requestRoutes} from "@/helpers/requestRoutes.js";

const {apiRequest} = useRequest()
const {setSkills, updateSkill, removeSkill} = useSkills()

export function useSkillRequest() {
    async function fetchSkills() {
        return await apiRequest({
            method: requestRoutes.SKILLS.GET.method,
            route: requestRoutes.SKILLS.GET.url

        }).then(({data, status}) => {
            setSkills(data)

            return {data, status}

        }).catch(err => {
            console.log('fetchSkills error', err)
        })
    }

    async function patchSkill(id, data) {
        return await apiRequest({
            method: requestRoutes.SKILLS.UPDATE.method,
            route: requestRoutes.SKILLS.UPDATE.url(id),
            body: data

        }).then(({data, status}) => {
            updateSkill(data)

            return {data, status}

        }).catch(err => {
            console.log('patchSkill error', err)
        })
    }

    async function deleteSkill(id) {
        return await apiRequest({
            method: requestRoutes.SKILLS.DELETE.method,
            route: requestRoutes.SKILLS.DELETE.url(id)

        }).then(({data, status}) => {
            removeSkill(id)

            return {data, status}

        }).catch(err => {
            console.log('deleteSkill error', err)
        })
    }

    return {
        fetchSkills,
        patchSkill,
        deleteSkill
    }
}