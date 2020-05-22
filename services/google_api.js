const axios = require('axios')
    , API_KEY = 'AIzaSyCHoKeFQZ3g5Iyiwq932WoyO45ZRg1f2NU'

exports.getDirection = async (body) => {
    var scg_id = await getPlaceId("SCG Bangsue")
    var centralWorld_id = await getPlaceId("Central World")
    
    var information = ""
    await axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=place_id:'+ scg_id +'&destination=place_id:'+ centralWorld_id +'&key=' + API_KEY)
               .then(res => information = res.data)
               
    return information
}

const getPlaceId = async (name) => {
    var mName = name.trim()
        mName = mName.replace(/ /g, "%20")

    var place_id = ""        
    await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + mName +'&inputtype=textquery&fields=place_id,formatted_address,name,geometry&key=' + API_KEY)
               .then(res => place_id = res.data.candidates[0].place_id)

    return place_id
}