import {computed, reactive} from "vue";
import {indexByField, isExist} from "@/helpers/index.js";

const state = reactive({
    contacts: []
})

export function useContacts() {
    const contacts = computed(() => {
        return state.contacts
    })

    function setContacts(data) {
        state.contacts = data
    }

    function addContact(contact) {
        state.contacts.push(contact)
    }

    function updateContact(contact) {
        const index = indexByField({array: state.contacts, value: contact?._id})

        if (isExist(index)) {
            state.contacts[index] = contact
        }
    }

    function removeContact(id) {
        const index = indexByField({array: state.contacts, value: id})

        if (isExist(index)) {
            state.contacts.splice(index, 1)
        }
    }

    return {
        contacts,
        setContacts,
        addContact,
        updateContact,
        removeContact
    }
}