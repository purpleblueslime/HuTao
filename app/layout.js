import './style.css'

export default function layout({children}) {

  return (
    <html>
      <head>
        <link rel='icon' type='image/png' href='/yae.png' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Jua' />
        <title>Your taste, Your anime list! 📃</title>
        <meta name='og:title' content='UwU List' />
        <meta name='og:image' content='/yae.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='UwU List' />
        <meta name='twitter:image' content='/yae.png' />
      </head>
      <body id='appWrap'>
        {children}
      </body>
    </html>
  )

}