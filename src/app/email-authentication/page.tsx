import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";

const EmailAuthentication: React.FC = () => {
    return (
        <div className={"relative min-h-screen overflow-hidden"}>
            <div className={"container"}>
                <Link href={"/"} className={"text-green-700 font-bold"}>Click me go home!</Link>
            </div>
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
                    <p className={"text-xl text-gray-500 font-bold mt-8"}>Xác thực Email</p>
                    <p className={"text-sm text-gray-400 mt-2"}>Chúng tôi đã gửi mã xác thực đến *est@gmail.com. Vui
                        lòng nhập mã từ email vào trường bên dưới.</p>
                    <div className={"flex justify-center items-center my-6"}>
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot className={"p-6"} index={0}/>
                                <InputOTPSlot className={"p-6"} index={1}/>
                                <InputOTPSlot className={"p-6"} index={2}/>
                                <InputOTPSlot className={"p-6"} index={3}/>
                                <InputOTPSlot className={"p-6"} index={4}/>
                                <InputOTPSlot className={"p-6"} index={5}/>
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <Button className={"w-full py-6 mt-6 bg-green-600"}>XÁC THỰC</Button>
                    <div className={"flex justify-center mt-6"}>
                        <span className={"text-sm"}>Không nhận được mã xác thực?</span>
                        <Link href={"/register"} className={"ms-2 text-sm text-green-600"}>Gửi lại</Link>
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

export default EmailAuthentication;