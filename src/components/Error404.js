import Title from '../shared/Title';
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <Title title={"404"} />

      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <h1 className='text-8xl font-bold'>404</h1>
        <h2 className='text-3xl font-bold'>Not Found</h2>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <h3 className='text-2xl'>The page you're looking for does not exist. <Link to={"/"}><a className='underline'>Go to home</a></Link></h3>
      </div>
    </>
  )
}
