import sanityClient from "$lib/utils/sanity";

export const load = async({ params }) => {

    const response = await sanityClient.fetch(`*[_type == "location" && _id == "${params._id}"][0]`);
   

    return {
        location: response
    }

}