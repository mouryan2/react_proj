import React from 'react'
import './Home.css'
import imagee from './images/imagee.png'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
export default function Home() {

      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
      //     useEffect(() => {
      //          const loader=()=><MeteorRainLoading/>
      //           return () => {
      //                 loader
      //           }
      //     },[])
      return (
            <div className="home">
                  <div className="picture">
                        {isMobile ?
                              <img src={imagee} alt="divya" height="40%" width="85%" /> :
                              <img src={imagee} alt="divya" height="30%" width="40%" />
                        }
                  </div>

                  <div className="my-name">  Divya Chandaka </div>
                  <p className="my-info">I have 2 years experience as Software Engineer and I loves exploring new technology's.</p>
                  <div className="my-quote"> Better Efforts, Better Outcomes </div>
            </div>
      )
}
