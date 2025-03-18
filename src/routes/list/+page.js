import sanityClient from "$lib/utils/sanity"

export const load = async() => {

    const response = await sanityClient.fetch(`*[_type == "location"]`)

    return {
        locations: response
    }

}