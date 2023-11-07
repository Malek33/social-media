import React from 'react'

function Profile() {

  const userProfile = {
    bannerUrl: 'https://previews.123rf.com/images/tanyasid/tanyasid1911/tanyasid191100010/133989259-beautiful-tropical-beach-banner-mockup-of-summer-landscape-with-coco-palms-on-blur-defocused-blue.jpg?fj=1',
    firstName: 'Malek',
    lastName: 'Maghraoui',
    profilePic: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/336727399_901654061074306_6920534568763109604_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p420x420_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=1159&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.ftun1-2.fna&_nc_cat=101&_nc_ohc=7cDkUfTK6CgAX_E1l3V&ccb=1-7&_nc_sid=5f2048&oh=00_AfCNNO5saVgEywZFoSqZUUgoB1EABXLl_VJS32k1cYmXkw&oe=65324184',
    story: true,
  }

  return (
    <div>
      <div className='w-full h-40 z-0' style={{backgroundImage: `url(${userProfile.bannerUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
      <div className='bg-white' style={{marginTop: '-30px', borderRadius: '30px 30px 0px 0px'}}>
        <br/>
        <br/>
        <div>
          <div className='flex items-center flex-col w-screen overflow-hidden'>
            <div>
              <img className='rounded-full w-40' src={userProfile.profilePic} alt="" />
            </div>
            <div className=' text-center'>
              <div>Malek Maghraoui</div>
              <div>ppppppppppppppppppppppppppppppppppppp ppppppppppppppppppppppppppp</div>
              <div className='flex justify-center'>
                <div className='flex flex-col'>
                  <div>58</div>
                  <div>POSTS</div>
                </div>
                <div className='flex flex-col'>
                  <div>1201</div>
                  <div>Followers</div>
                </div>
                <div className='flex flex-col'>
                  <div>1024</div>
                  <div>Following</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Profile