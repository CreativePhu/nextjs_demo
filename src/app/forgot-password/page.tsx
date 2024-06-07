import React from "react";
import Image from "next/image";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Input} from "@/components/ui/input";

const ForgotPasswordPage = () => {
    return (
        <div className={"relative min-h-screen overflow-hidden"}>
            <div className={"flex grid-cols-2 justify-center items-start mt-32"}>
                <div className={"bg-white px-8 py-8 rounded-md w-1/4"}>
                    <div className={"flex flex-row justify-center items-center"}>
                        <Image
                            src="/banner/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            quality={100}
                        />
                        <div className={"flex justify-center ms-3"}>
                            <p className={"text-2xl text-gray-500 font-bold"}>Harvey</p>
                        </div>
                    </div>
                    <p className={"text-xl text-gray-500 font-bold mt-8"}>Quên mật khẩu</p>
                    <p className={"text-sm text-gray-400 mt-2"}>Chúng tôi sẽ gửi cho bạn hướng dẫn để đặt lại mật khẩu đến email của bạn</p>
                    <form>
                        <div className={"mt-4 mb-4"}>
                            <Input placeholder={"Email"} type={"email"} className={"py-6"}/>
                        </div>
                    </form>
                    <Button className={"w-full py-6 mt-6 bg-green-600"}>XÁC NHẬN</Button>
                    <div className={"flex justify-center mt-6"}>
                        <Link href={"/login"} className={"ms-2 text-sm text-green-600"}>Trở lại trang đăng nhập</Link>
                    </div>
                </div>
            </div>
            <div className={"absolute w-full h-2/6 bg-gray-200 -bottom-28 -skew-y-3"}></div>
            <div className={"absolute bottom-20 flex flex-row justify-between items-end w-full px-24 z-10"}>
                <Image src={"/banner/tree-left.png"} alt={"tree-left"} width={120} height={120}/>
                <Image src={"/banner/tree-right.png"} alt={"tree-right"} width={150} height={150}/>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;