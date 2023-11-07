import React from 'react'
import AsideMenu from './AsideMenu'
import QuickChatSide from './QuickChatSide'
// import { useNavigate } from 'react-router-dom'
import '../App.css'

function Home() {

    const Icons = (props) => {
        return(
            props.icon === 'Notifications' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            : props.icon === 'Messages' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            : props.icon === 'Add' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            : props.icon === 'More' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            : props.icon === 'Heart' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            : props.icon === 'SendAsMessage' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            : props.icon === 'Send' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            : null
        )
    }

    const storiesArray = [
        {
            name: "Malek",
            content: "https://random.imagecdn.app/500/151"
        },
        {
            name: "Ahmed",
            content: "https://random.imagecdn.app/500/152"
        },
        {
            name: "Ayoub",
            content: "https://random.imagecdn.app/500/150"
        },
        {
            name: "Dali",
            content: "https://random.imagecdn.app/500/250"
        },
        {
            name: "Omar",
            content: "https://random.imagecdn.app/500/350"
        },
        {
            name: "Youssef",
            content: "https://random.imagecdn.app/500/450"
        }
    ]

    const Stories = () => {
        return(
        <div className='flex py-5 w-auto overflow-y-auto gap-4 no-scrollbar stories-home-section storiesClass'>
            {
                storiesArray.map( (item, index) => <div>
                    {
                        index === 0 ?
                        <div className='border-blue-700 border-dashed border-2 rounded-2xl p-1'>
                            <div className='relative'>
                                <div className='w-20 h-24 bg-no-repeat rounded-xl flex justify-center align-bottom' style={{backgroundImage: `url(${item.content})`, backgroundPosition: 'center', backgroundSize: 'cover', filter: 'brightness(30%)'}} />
                                <p className='absolute text-white bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3'><Icons icon="Add"/></p>
                                <p className='absolute text-white bottom-2 left-1/2 transform -translate-x-1/2'>{item.name}</p>
                            </div>
                        </div>
                        :
                        <div className='border-blue-700 border-2 rounded-2xl p-1'>
                            <div className='relative'>
                                <div className='w-20 h-24 bg-no-repeat rounded-xl flex justify-center align-bottom' style={{backgroundImage: `url(${item.content})`, backgroundPosition: 'center', backgroundSize: 'cover', filter: 'brightness(80%)'}} />
                                <p className='absolute text-white bottom-2 left-1/2 transform -translate-x-1/2'>{item.name}</p>
                            </div>
                        </div>
                    }
                </div> )
            }
        </div>
        )
    }

    const postsArray = [
        {
            name: 'Malek Maghraoui',
            profilePic: 'https://random.imagecdn.app/500/151',
            story: true,
            date: '13 min ago',
            image: 'https://random.imagecdn.app/500/557',
            status: '',
            isLiked: true
        },
        {
            name: 'Scientia',
            profilePic: 'https://random.imagecdn.app/500/153',
            story: false,
            date: '1 day ago',
            image: 'https://random.imagecdn.app/500/356',
            status: '',
            isLiked: false
        },
        {
            name: 'Malek Maghraoui',
            profilePic: 'https://random.imagecdn.app/500/151',
            story: true,
            date: 'September 21 at 10:29 PM ',
            image: 'https://random.imagecdn.app/500/358',
            status: '',
            isLiked: true
        },
    ]

    const Post = () => {
        return postsArray.map( item =>
            <div className='bg-slate-100 w-full p-5 h-auto mt-5 rounded-lg post-image-content-container'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div className={`${item.story ? "border-blue-700 border-2 p-1 rounded-full" : 'p-1'}`}>
                    <div className='w-12 h-12 bg-slate-600 rounded-full' style={{ backgroundImage: `url(${item.profilePic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                    </div>
                    <div className='flex-col' >
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                    </div>
                </div>
                <div><Icons icon="More"/></div>
            </div>
            <div className='py-5 flex flex-col gap-2'>
                <p style={{ textAlign: 'start', unicodeBidi: 'plaintext', display: item.status === "" ? 'none' : 'block' }}>{item.status}</p>
                <div className='relative z-0 flex justify-center'>
                    <img className='rounded-xl post-image-content' src={item.image} alt='content' />
                    <div className='flex justify-between px-3 absolute bottom-3 w-full'>
                        <div className='flex gap-3'>
                            <div className='p-1 bg-white rounded-full'><Icons icon="SendAsMessage"/></div>
                            <div className='p-1 bg-white rounded-full'><Icons icon="Send"/></div>
                        </div>
                        <div className='p-1 bg-white rounded-full'><Icons icon="Heart"/></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

  return (
    <div id='Home-Section' className='flex justify-between'>
        <AsideMenu/>
        <div className='px-3 py-5 mb-14 bechNsalla7Screen max-w-3xl'>
            <div className='flex justify-between'>
                <p className=' text-blue-600 text-4xl font-bold '>Feed</p>
                <div className='flex gap-3 justify-center align-middle'>
                    <div className='p-2 bg-slate-200 rounded-full cursor-pointer'>
                        <Icons icon="Notifications"/>
                    </div>
                    <div className='p-2 bg-slate-200 rounded-full cursor-pointer'>
                        <Icons icon="Messages"/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <Stories />
            </div>

            <div className='p-2'>
                <Post />
            </div>

        </div>
        <QuickChatSide />
    </div>
  )
}

export default Home