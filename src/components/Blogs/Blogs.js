import style from '@/components/Blogs/Blogs.css'
import BlogCardUp from '@/components/Blogs/BlogCardUp.js'
import BlogCardDown from '@/components/Blogs/BlogCardDown.js'


export default function Blogs() {
    return (

        <div className="Blogs">
            <p style={{fontWeight: 'bolder', fontSize:'4em', color: 'white', paddingBottom: '10%'}}> #beyond jussssst<br />business</p>
            <p style={{fontWeight: 'bolder', color: 'white', fontSize: 'medium'}}>SOME CASE STUDIES</p>
            <div style={{height: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <BlogCardUp style={style} />
                <BlogCardUp style={style}/>
            </div>
            <div style={{height: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <BlogCardDown key={1} style={style}/>
                <BlogCardDown key={2} style={style}/>
                <BlogCardDown key={3} style={style}/>
                {/* <BlogCardDown style={style}/> */}
            </div>
        </div>
    )
}