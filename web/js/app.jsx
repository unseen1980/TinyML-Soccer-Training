"use strict";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.data,
    };
    this.instance;
    this.options = {
      chart: {
        type: "column",
      },
      title: {
        text: "Performance",
      },
      subtitle: {
        text: "Sunday Match",
      },
      xAxis: {
        categories: ["Kick", "Up Block", "Back", "Pass", "Drill"],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of times",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Alex",
          data: this.state.count,
          animation: false,
        },
      ],
    };
  }

  componentDidMount(prevProps) {
    this.instance = Highcharts.chart("container", this.options);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ count: this.props.data });
    }
  }

  render() {
    return (
      <div>
        <div id="container" />
      </div>
    );
  }
}
class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [0, 0, 0, 0, 0],
      kicks: 0,
      upBlocks: 0,
      backPasses: 0,
      passes: 0,
      drills: 0
    };
    this.token = null;
  }

  mySubscriber = (msg, data) => {
    this.setState({ count: data })
  };

  token = PubSub.subscribe("gestures", this.mySubscriber);

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="dashboard">
          <div className="dashboard__item dashboard__item--full">
            <div className="card">
              <figure className="highcharts-figure">
                <Chart
                  data={Object.values(this.state.count)}
                  key={Object.values(this.state.count)}
                />
              </figure>
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card text-center ">
              <span>Kicks</span>
              <br />
              <br />
              {this.state.count['kick']}
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card text-center ">
              <span>Up Blocks</span>
              <br />
              <br />
              {this.state.count['up']}
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card text-center ">
              <span>Back passes</span>
              <br />
              <br />
              {this.state.count['back']}
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card text-center ">
              <span>Passes</span>
              <br />
              <br />
              {this.state.count['pass']}
            </div>
          </div>
          <div className="dashboard__item dashboard__item--col">
            <div className="card text-center ">
              <span>Drills</span>
              <br />
              <br />
              {this.state.count['drill']}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AdminPanel />, document.getElementById("adminMain"));
