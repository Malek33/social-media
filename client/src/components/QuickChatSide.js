import React from 'react'
import '../App.css'

function QuickChatSide() {
  const NotificationByNameQuickChat = (props) => {
    return <div className='flex gap-3 items-center px-3 py-2 rounded-xl bg-slate-100 w-fit m-3 cursor-pointer'>
            <div className='bg-blue-500 rounded-full px-2 text-white text-sm'>{props.notifications}</div>
            <div className=' font-bold text-sm'>{props.name}</div>
          </div>
  }

  const ConversationLine = (props) => {
    return(<div className={`flex justify-start items-top gap-2 ${props.user === 'current' ? 'flex-row' : 'flex-row-reverse'}`}>
      <div style={{ backgroundImage: `url(${props.img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '50px', height: '50px', minWidth: '50px', borderRadius: '9999px' }}/>
      <div className='p-3 bg-slate-100 rounded-2xl'>{props.content}</div>
    </div>)
  }

  const currentUserId = '2274'

  const conversation = [
    {username: 'Hatake Kakashi', content: 'Good day! have u prepared the slide deck for me?', id: "3285", img: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/336727399_901654061074306_6920534568763109604_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p420x420_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1159&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.ftun1-2.fna&_nc_cat=101&_nc_ohc=7cDkUfTK6CgAX_E1l3V&ccb=1-7&_nc_sid=5f2048&oh=00_AfCNNO5saVgEywZFoSqZUUgoB1EABXLl_VJS32k1cYmXkw&oe=65324184'},
    {username: 'Malek Maghraoui', content: 'Yes! Wait me a sec', id: "2274", img: 'https://random.imagecdn.app/500/151'},
    {username: 'Hatake Kakashi', content: 'Looks good! Thanks a lot!', id: "3285", img: 'https://random.imagecdn.app/500/151'},
  ]

  const friends = [
    {username: 'Ahmed Ghozzi', active: true, img: 'https://random.imagecdn.app/500/431', timeElapsed: ''},
    {username: 'Ayoub Benamer', active: false, img: 'https://random.imagecdn.app/432/432', timeElapsed: '5m'},
    {username: 'Dali Nebli', active: true, img: 'https://random.imagecdn.app/432/433', timeElapsed: ''},
    {username: 'Omar Kacem', active: true, img: 'https://random.imagecdn.app/432/434', timeElapsed: ''},
    {username: 'Youssef Mahjoubi', active: true, img: 'https://random.imagecdn.app/436/432', timeElapsed: ''},
    {username: 'Selim Khelifi', active: true, img: 'https://random.imagecdn.app/432/435', timeElapsed: ''},
    // {username: '', active: true, img: '', timeElapsed: ''},
  ]

  return (
    <div id='quick-chat-side' className='flex-col bg-slate-100 w-1/4 overflow-hidden h-screen' style={{ minWidth: '22%'}}>
      <div className=' bg-white m-5 rounded-3xl'>
        <div>
          <div className=' font-bold flex justify-between items-center p-5'>
            <div className='text-xl'>Quick Chat</div>
            <div className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
          </div >
          <div className='flex overflow-hidden hover:overflow-x-auto mb-3'>
            <NotificationByNameQuickChat name="Malek Maghraoui" notifications="2" />
            <NotificationByNameQuickChat name="Alexander Mbappe" notifications="1" />
            <NotificationByNameQuickChat name="Hatake Kakashi" notifications="4" />
          </div>
          <hr/>
        </div>
        <div className='p-5 flex flex-col gap-2'>
          {
            conversation.map(
              (item) =>
                item.id === currentUserId
                ? <div><ConversationLine user="current" img={item.img} username={item.username} content={item.content} /></div>
                : <div><ConversationLine user="other" img={item.img} username={item.username} content={item.content} /></div>
            )
          }
          {/*  */}
          <div>
            <div className='flex justify-center'>
              <div className='mt-4 w-11/12 h-9 flex justify-center relative'>
                <input className='rounded-xl bg-slate-200 focus:bg-slate-100 transition outline-none w-full h-9 px-3 pb-1 text-base border-2 pl-11' placeholder='Type Something...' type="text"/>
                <div className='absolute left-4' style={{top: '6px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <br/>
          <br/>
          <div className='flex flex-col gap-3'>
            {
              friends.map( item => <div className='flex flex-row gap justify-between w-full items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <div style={{ backgroundImage: `url(${item.img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '50px', height: '50px', minWidth: '50px', borderRadius: '9999px' }}/>
                  <div>{item.username}</div>
                </div>
                { item.active ? <div className='text-5xl text-green-600' style={{ marginBottom: '-25px' }}>°</div> : <div className=' text-gray-400'>{item.timeElapsed}</div> }
              </div> )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickChatSide