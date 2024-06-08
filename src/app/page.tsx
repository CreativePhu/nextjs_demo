'use client'
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/app/redux/hook/hooks";
import {increment, decrement} from "@/app/redux/counter/counter.";

export default function Home() {

    const count: number = useAppSelector((state) => state.counter.values);
    const dispatch = useAppDispatch();

    return (
        <div className="text-center mt-4">
            <div className={"flex flex-row ms-4"}>
                <button className={"me-4 text-orange-500 font-bold"} onClick={() => dispatch(increment())}>Increment
                </button>
                <h1 className={"text-cyan-900 text-2xl"}>COUNT: {count}</h1>
                <button className={"me-4 text-orange-500 font-bold ms-4"} onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <h1>LMS PROJECT</h1>
            <h1 className="text-gray-400 mt-5">Another my page !</h1>
            <ul>
                <li><Link href={"/login"}>Login Page</Link></li>
                <li><Link href={"/email-authentication"}>Email Authentication Page</Link></li>
                <li><Link href={"/forgot-password"}>Forgot Password Page</Link></li>
            </ul>
        </div>
    );
}
