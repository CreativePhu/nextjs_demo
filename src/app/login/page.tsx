import React from 'react'
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Login: React.FC = () => {
    return (
        <div className={"relative min-h-screen overflow-hidden"}>
            <div className={"container"}>
                <Link href={"/"} className={"text-green-700 font-bold"}>Click me go home!</Link>
            </div>
            <div className={"flex grid-cols-2 gap-10 justify-center items-start mt-32"}>
                <div>
                    <Image
                        src="/banner/logo-login.png"
                        alt="logo-login"
                        width={650}
                        height={650}
                        quality={100}
                    />
                </div>
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
                    <p className={"text-xl text-gray-500 font-bold mt-8"}>Chào mừng bạn đến Harvey</p>
                    <p className={"text-sm text-gray-400 mt-2"}>Vui lòng đăng nhập tài khoản của bạn</p>
                    <form>
                        <div className={"mt-4 mb-4"}>
                            <Input placeholder={"Email"} type={"email"} className={"py-6"}/>
                        </div>
                        <div className={"mg-4 mb-4"}>
                            <Input placeholder={"Mật khẩu"} type={"password"} className={"py-6"}/>
                        </div>
                    </form>
                    <div className={"flex flex-row justify-between px-1"}>
                        <div className={"flex justify-around items-center"}>
                            <Checkbox id={"luu-login"}/>
                            <label
                                htmlFor="luu-login"
                                className="ms-2 text-sm"
                            >
                                Ghi nhớ đăng nhập
                            </label>
                        </div>
                        <div>
                            <Link href={"/"} className={"text-sm text-green-600"}>Quên mật khẩu?</Link>
                        </div>
                    </div>
                    <Button className={"w-full py-6 mt-6 bg-green-600"}>Đăng nhập</Button>
                    <div className={"flex justify-center mt-6"}>
                        <span className={"text-sm"}>Bạn chưa có tài khoản?</span>
                        <Link href={"/register"} className={"ms-2 text-sm text-green-600"}>Tạo tài khoản mới</Link>
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

export default Login
