export default function Component(props) {

    const headers = {
      "Content-type": "application/json",
    }
    
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState({title: "", body: ""});
  
    useEffect(()=> {
      const get = async () => {
        const res = await axios("http://127.0.0.1:8000/api/articles");
        setArticles(res.data)
      }
      get();
    },[])
    
    
    // then.第一引数に成功時呼びたい関数を第二引数に失敗時に呼び出したい関数を入れれます
    // thenをさらに繋げたい場合(成功時に複数の処理をさせたい時など)は成功時の関数の戻り値に何かしらの値を返してあげることで繋ぐことができます。
    
    //resolveは成功rejectは失敗したとき
    //resolveの引数はthenの関数（一番目の関数）に渡される値です
    //複数渡す場合は配列で、
    
    //catchはPromiseの処理がrejectされた場合thenの第二引数かcatchで登録した関数が呼び出されます。
    // thenの第二引数に登録する時と後ろにcatchを繋ぐ場合の違いとしては,
    // thenが実行中に例外が発生した場合でもcatchでエラーを取得することができます。
    
    // axios.に続けてgetやpostを記述、そのあとURLやパラメーター。
    
    //async関数内でPromiseを返す関数を呼び出すところでawaitを付けると結果を取得して後続の処理を行います。
    // awaitはasync function内の処理を一時停止する。その結果が帰るまで次の処理を行わない感じ。
    
    const handleOnCreateNewArticle = async () => {
      const data = {
        title: newArticle.title,
        body: newArticle.body
      }
      
      //awitは？
      //axiosで定義したデータをpost
      await axios.post("http://127.0.0.1:8000/api/articles", data, {
        headers
      })
      
      //
      const res = await axios("http://127.0.0.1:8000/api/articles");
      setArticles(res.data)
    }
    
    
    
    return (
      <>
        <h1>
          {props.title}
        </h1>
        <h2>ArticleList</h2>
        {articles.map((article) => 
          <div key={article.id}>
          <div>TITLE:{article.title}</div>
          <div>BODY:{article.body}</div>
          <hr />
          </div>
          )}
  
        <input type="text" name="title" onChange={(e)=>{setNewArticle({...newArticle, title: e.target.value})}} value={newArticle.title} placeholder="New Title?"/>
        <input type="text" name="body" onChange={(e)=>{setNewArticle({...newArticle, body: e.target.value})}} value={newArticle.body} placeholder="New Body?"/>
        <button onClick={ handleOnCreateNewArticle }>Create</button>
  
      </>
    )
  }
  
//オブジェクトを分解して、nameの値を更新する(分割代入)
setMember({ ...member, name: e.target.value });

//こう書くと、その時の他の値を消してしまう。この場合だと、partが消えてしまう
setMember({ name: e.target.value });

//useeffectの効果
//[key]と繰り返し