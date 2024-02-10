import {computed, reactive, readonly} from "vue";
import {indexByField, isExist} from "@/helpers/index.js";

const state = reactive({
    skills: []
})

export function useSkills() {
    const skills = computed(() => {
        return readonly(state.skills)
    })

    function setSkills(skills) {
        state.skills = skills
    }

    function setSkill(skill) {
        state.skills.push(skill)
    }

    function updateSkill(skill) {
        const index =  indexByField({array: state.skills, value: skill?._id})

        if (isExist(index)) {
            state.skills[index] = skill
        }
    }

    function removeSkill(_id) {
        const index = indexByField({array: state.skills, value: _id})

        if (isExist(index)) {
            state.skills.splice(index, 1)
        }
    }

    return {
        skills,
        setSkills,
        setSkill,
        updateSkill,
        removeSkill
    }
}