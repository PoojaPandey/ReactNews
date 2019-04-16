import React, { Component } from 'react';
import * as constant from '../Utility/Constant';
// import * as constant from './Utility/Constant';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isFetching: false
        };
    }

    fetchNews = () => {
        this.setState({ ...this.state, isFetching: true })
        fetch(constant.NEWS_URL)
            .then(response => response.json())
            .then(result => this.setState({
                news: result.articles,
                isFetching: false
            }))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.fetchNews()
    }

    render() {
        //   const { news } = this.state.news;
        let { height, width } = this.props;

        let mainContent = {
            flexDirection: 'row',
            display: 'flex',
            border: '1px solid',
            margin: '30px',
            borderRadius: '20px',
            borderColor: "lightGray",
            marginLeft: '30px',
        };

        let justFnfo = {
            flexDirection: 'row',
            display: 'flex',
            // margin: '30px',
            // borderColor: "lightGray",
            // marginLeft: '30px',
            // mrginBottom: '0px'
        };
        let contentStyle = {
            height: 300,
            width: "70%",
            marginLeft: '10px',
            marginRight: '10px'
        };
        let imageContainerStyle = {
            justifyContent: 'center',
            height: 300,
            width: "30%",
            marginBottom: '10px'
        };


        function DateFormatted(props) {

            let date = new Date(props.date);
            return <h6 style={{ width: '50%', textAlign: "right", marginRight: '10px' }}>
                Published At: {(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                    .format(date))}</h6>
        }

        /* Code for creating the news list with data*/
        function NewsList(props) {
            return (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Top News</h1>
                    <ul>

                        {props.newsList.map(art =>
                            <li key={art.author} style={mainContent}>
                                <div style={imageContainerStyle}>
                                    <img src={art.urlToImage} alt={"img"} style={{ width: '90%', height: '90%', marginLeft: '20px', marginTop: '4%' }} />
                                </div>
                                <div style={contentStyle}>
                                    <h2 style={{ fontStyle: 'italic' }}>{art.title}</h2>
                                    <h4>{art.description}</h4>
                                    <p>{art.content}...</p>
                                    <div style={justFnfo}>
                                        <h6 style={{ width: '50%' }}>Author:{art.author}</h6>
                                        <DateFormatted date={art.publishedAt} />
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <NewsList newsList={this.state.news} />
            </div>
        );
    }
}

export default NewsList;
