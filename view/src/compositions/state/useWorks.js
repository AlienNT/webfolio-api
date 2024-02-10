import {computed, reactive, readonly} from "vue";
import {indexByField, isExist} from "@/helpers/index.js";

const state = reactive({
    works: []
})

export function useWorks() {
    const works = computed(() => {
        return readonly(state.works)
    })

    function setWorks(works) {
        state.works = works
    }

    function addWork(work) {
        state.works.push(work)
    }

    function updateWork(work) {
        const index = indexByField({array: state.works, value: work?._id})

        if (isExist(index)) {
            state.works[index] = work
        }
    }

    function removeWork(id) {
        const index = indexByField({array: state.works, value: id})

        if (isExist(index)) {
            state.works.splice(index, 1)
        }
    }

    return {
        works,
        setWorks,
        addWork,
        updateWork,
        removeWork
    }
}