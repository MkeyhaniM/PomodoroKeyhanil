export default function Home() {
    return (
        <>

            <main
                className="h-screen w-screen bg-[url(https://s28.picofile.com/file/8464765550/_Wallpaper_4K3D_12797_.jpg)] bg-cover">
                <div className='container pt-28 mx-auto flex items-center '>
                    <div className={'w-2/4'}>
                        <h1 className={'text-6xl text-white font-Russo-One'}>
                            Pomodoro-keyhanil
                        </h1>
                        <div className={'bg-stone-200 bg-opacity-90 p-4 rounded-lg r my-20 font-Josefin-Sans '}>
                            <div>
                                <h3 className={'text-3xl my-2'}>What is pomodoro-time ?</h3>
                                <p className={'text-xl tracking-wider'}>
                                    Pomodoro time is a time management technique developed by Francesco Cirillo in the
                                    late 1980s. The technique involves breaking down
                                    work into 25-minute intervals, called "Pomodoros," separated by short breaks. The
                                    name "Pomodoro" comes from the Italian word for tomato,
                                    as Cirillo used a tomato-shaped kitchen timer to track his work intervals.
                                </p>
                            </div>
                            <div className={'my-5 '}>
                                <h4 className={'text-2xl my-2'}>
                                    <ins>Here's how the Pomodoro technique works :</ins>
                                </h4>
                                <ul className={'list-decimal text-lg mx-6 tracking-wider'}>
                                    <li>Choose a task to work on.</li>
                                    <li>Set a timer for 25 minutes and work on the task until the timer goes off.</li>
                                    <li>Take a short break (3-5 minutes).</li>
                                    <li>Repeat steps 2 and 3 until you've completed four Pomodoros.</li>
                                    <li>After completing four Pomodoros, take a longer break (15-20 minutes).</li>
                                </ul>
                            </div>
                            <p className={'tracking-wider text-xl'}>
                                The idea behind the Pomodoro technique is that by breaking work into short, focused
                                intervals, you can maintain your focus and avoid
                                distractions. The short breaks give your brain a chance to rest and recharge, while the
                                longer breaks provide an opportunity to reflect on
                                your work and plan your next steps.
                            </p>
                        </div>
                    </div>
                    <div className={'mx-auto'}>
                        <button
                            className='text-white text-lg bg-violet-600 w-40 h-10 rounded-lg  shadow-[3px_3px_7px_1px_#CB8AFF] active:shadow-none hover:bg-[#420075] font-Signika-Negative'>
                            Get started
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
