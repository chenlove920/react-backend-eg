import { getLocalToken } from "@/utils";
import { redirect } from "react-router";

// 权限验证
export function AuthRoute() {
    const token = getLocalToken()
    // const response = await request.get('token校正');
    if (!token) {
        return redirect('login')
    }
    return null
}