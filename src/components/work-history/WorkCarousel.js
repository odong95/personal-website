import { AppConstants } from 'components/App.constants';
import Carousel, { autoplayPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import '@brainhubeu/react-carousel/lib/style.css';

const WorkCarousel = () => {
    const companies = () => {
        let res = [];
        AppConstants.companies.forEach((c) => {
            res.push(
                <a className="w-60" key={c.name} href={c.url} target="_blank" rel="noreferrer">
                    <img src={c.logo} alt={c.name} />
                </a>
            )
        })
        return res;
    }

    return (
        <div className="ml-3">
            <Carousel
                plugins={[
                    'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2500,
                        }
                    }, {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <MdArrowBackIosNew className="cursor-pointer" />,
                            arrowRight: <MdArrowForwardIos className="cursor-pointer" />,
                            addArrowClickHandler: true,
                        }
                    }]}
            >
                {companies()}
            </Carousel>
        </div>
    )
}

export { WorkCarousel }

