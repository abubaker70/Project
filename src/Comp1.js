import React, { Component } from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

class Comp1 extends Component {
  state = { flag: false };
  style1 = { marginRight: 100 };
  style2 = { marginRight: 15 };
  style3 = { width: 1000, backgroundColor: "lightGrey", color: "black" };
  style4 = { width: 1000, backgroundColor: "white", color: "black" };
  style5 = { marginTop: 20 };
  style6 = { marginTop: 20 };
  render() {
    return (
      <React.Fragment>
        <table>
          {/* <thead>
            <tr>
              <th>sender</th>
              <th>content</th>
              <th>date and time</th>
              <th>delete</th>
            </tr>
          </thead> */}
          <tbody>
            {this.props.Emails.map((e, index) => {
              return (
                <tr key={index}>
                  {e.status ? (
                    <React.Fragment>
                      <AppBar style={this.style5} position="static">
                        <Toolbar
                          onClick={() => this.props.onRead(index)}
                          style={e.read ? this.style4 : this.style3}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src={e.avatar}
                            style={this.style2}
                          />
                          <Typography style={this.style1} variant="h6">
                            {e.sender}
                          </Typography>
                          <Typography style={this.style2} variant="h6">
                            {e.content}
                          </Typography>
                          <IconButton style={this.style2} aria-label="delete">
                            <DeleteRoundedIcon
                              onClick={() => this.props.onDel(index)}
                            ></DeleteRoundedIcon>
                          </IconButton>
                          <IconButton aria-label="important">
                            {e.favorite ? (
                              <FavoriteIcon
                                onClick={() => this.props.onFav(index)}
                              ></FavoriteIcon>
                            ) : (
                              <FavoriteBorderIcon
                                onClick={() => this.props.onFav(index)}
                              ></FavoriteBorderIcon>
                            )}
                          </IconButton>
                        </Toolbar>
                      </AppBar>

                      <td></td>
                    </React.Fragment>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Comp1;
