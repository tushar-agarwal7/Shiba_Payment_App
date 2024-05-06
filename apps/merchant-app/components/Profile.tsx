import { Avatar, Button, Fade, Slide, Grow } from "@mui/material";

export default function Profile({ amount, session }: any) {

    return (
        <div className="relative flex flex-col items-center justify-center mt-20">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-bgSlide" />
            <Fade in={true}>
                <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-96 animate-fadeIn">
                    <div className="flex flex-col items-center space-y-4">
                        <Grow in={true}>
                            <Avatar className="h-20 w-20 border-4 border-indigo-500 dark:border-violet-500">
                                {session.user.name.charAt(0)}
                            </Avatar>
                        </Grow>
                        <div className="text-center">
                            <Slide direction="down" in={true}>
                                <h1 className="text-2xl font-bold text-indigo-900 dark:text-violet-100">{session.user.name}</h1>
                            </Slide>
                            <Slide direction="up" in={true}>
                                <p className="text-indigo-500 dark:text-violet-400">{session.user.email}</p>
                            </Slide>
                        </div>
                        <Fade in={true}>
                            <div className="bg-indigo-100 dark:bg-gray-700 rounded-lg p-4 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="text-indigo-500 dark:text-violet-400">Total Balance</p>
                                    <p className="text-2xl font-bold text-indigo-900 dark:text-violet-100">{amount}</p>
                                </div>
                            </div>
                        </Fade>
                        <Grow in={true}>
                            <div className="w-full">
                                <Button disabled className="w-full bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-violet-400 dark:text-gray-900 dark:hover:bg-violet-500">
                                    Withdraw Funds
                                </Button>
                            </div>
                        </Grow>
                    </div>
                </div>
            </Fade>
            <Slide direction="right" in={true}>
                <div className="w-full max-w-md ">
                    <img src="https://images.unsplash.com/photo-1644363832001-0876e81f37a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nZWNvaW4lMjBtZW1iZXJ8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-lg shadow-lg" />
                </div>
            </Slide>
        </div>
    )
}
