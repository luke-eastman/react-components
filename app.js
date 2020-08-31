// TODO
var GroceryList = (props) => (
  <div>
    <ul>
      {props.items.map(item => <GroceryListItem item={item} />)}
    </ul>
  </div>
);
class GroceryListItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      done:false
    }
  };


  toggleGroceryItemHover () {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.toggleGroceryItemHover.bind(this)} onMouseLeave={this.toggleGroceryItemHover.bind(this)}>{this.props.item}</li>
    );
  }
};


ReactDOM.render(<GroceryList items={['Bread', 'Cheese', 'Lettuce', 'Meat']}/>, document.getElementById("app"));
