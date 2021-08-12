import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  carSize: {
    width: '800px',
  },
  '@media only screen and (max-width: 850px)': {
    carSize: {
      width: '500px',
    },
  },
}));

export default function LayPdf({ pdf }) {
  const classes = useStyles();
  const [urlArr, setUrlArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const makeUrl = (pdf, n) => {
    var url = pdf.slice(0, 50) + `pg_${n},` + pdf.slice(50);
    return url;
  };

  useEffect(() => {
    const getUrls = () => {
      setUrlArr((oldArray) => [...oldArray, pdf.pdf]);
      for (let i = 2; i <= pdf.pageNumbers; i++) {
        const url = makeUrl(pdf.pdf, i);
        setUrlArr((oldArray) => [...oldArray, url]);
      }
    };
    getUrls();
    setLoading(false);
  }, []);

  return (
    <div>
      {!loading && (
        <div className={classes.carSize}>
          <Carousel>
            {urlArr.map((u) => (
              <div>
                <img src={u} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}
