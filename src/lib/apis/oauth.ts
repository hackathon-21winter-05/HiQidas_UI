import {oauth} from "/@/lib/apis/pb/rest/oauth"
import axios from "axios"

export const getOAuthCallback = async () => {
	const res = await axios.get("/api/oauth/callback", {responseType: "arraybuffer"})
	
	const data = oauth.GetOauthCallbackResponse.decode(new Uint8Array(res.data))

	return data
}