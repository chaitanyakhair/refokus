import React from 'react'

function Work() {

  var images =[
    {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FqJF5OrRvTmNXll-lkBTi-9PnyOULWdw99wVEeGi1x6Q.jpg%3Fauto%3Dwebp%26s%3D33d5b0de309862e2677e75e0d09535cbd1dab60e&f=1&nofb=1&ipt=f8f4a0b178a2fb60b7d541b3dfe234841c081aa14f109c4869c1e28dba30e2b7&ipo=images" ,top: "50%" ,left: "50%" ,isActive: false},
    {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fcute-snowshoe-cat-square-elisabeth-lucas.jpg&f=1&nofb=1&ipt=32dccf19002bce0c80680be237c8088fab533b86178dc47c795c6d8ce0ed7190&ipo=images" ,top: "53%" ,left: "48%" ,isActive:false },
    {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC9KQUT0XoAI8n5e.jpg&f=1&nofb=1&ipt=dcc63ddc16773962bf07569b7a7a728b9ee6f4c3367171ecf8409c1f58ca3351&ipo=images" ,top: "47%" ,left: "52%" ,isActive: false},
    {url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ajn-9ZveGms%2FUim4czBNTgI%2FAAAAAAAAAWo%2Fcbin6JlIv-w%2Fs1600%2FBlack-And-White-Small-Cat-HD-Wallpaper.jpg&f=1&nofb=1&ipt=4630bb5b70e8189222adebe7d1dcc6b24149d5635ba5b1db7c1b0f60140e2568&ipo=images" ,top: "52%" ,left: "49%" ,isActive: false},
    {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb1%2Fe7%2Fb3%2Fb1e7b30beedcd7411a6ee3b54366770e.jpg&f=1&nofb=1&ipt=6dff76da00ea781dfc338362fc5a0b4fc4023b1216f7e21790654b0b4d4508ca&ipo=images" ,top: "54%" ,left: "51" ,isActive: false},
    {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large-5%2Fserious-cat-square-dog-photography.jpg&f=1&nofb=1&ipt=ee47268f329483c7874f7f6b3301dfc5ac58f26390b08adb9fab95850f8f981a&ipo=images" ,top: "52%" ,left: "47%" ,isActive: false},

  ]
  return (
    <div className="w-full mt-10">
        <div className="relative max-w-screen-xl mx-auto text-center">
            <h1 className='text-[30vw] leading-none font-medium select-none racking-tight'>work</h1>
            <div className="absolute top-0 w-full h-full">
              {images.map((elem,index )=> elem.isActive && (<img className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]" src={elem.url} style={{ top : elem.top , left : elem.left }} />))}
            </div>
        </div>
    </div>
  )
}

export default Work