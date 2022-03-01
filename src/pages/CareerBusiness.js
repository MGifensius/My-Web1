function CareerBusinessPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('./fee-assessment-books?categoryId=11')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ul>
                {
                    posts.map(post => <li key={posts.id}>{post.name}</li>)
                }
            </ul>
        </div>
    );
}



export default CareerBusinessPage