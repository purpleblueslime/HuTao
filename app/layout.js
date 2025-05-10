import './style.css'

export default function layout({children}) {

  return (
    <html>
      <head>
        <link rel='icon' type='image/gif' href='/hutao.gif' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Jua' />
        <title>Your taste, Your anime list! 💗</title>
        <meta name='og:title' content='HuTao' />
        <meta name='og:image' content='/hutao.gif' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Your taste, Your anime list! 💗' />
        <meta name='twitter:image' content='/hutao.gif' />
      </head>
      <body id='appWrap'>
        {children}
      </body>
    </html>
  )

}