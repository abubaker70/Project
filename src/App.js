import React, { Component } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { Container } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

class App extends Component {
  state = {
    flag: 0,
    open: true,
    del: false,
    read: false,
    favorite: false
  };

  handleClick = i => {
    console.log(i);
    if (i + 1 == 1) {
      this.setState({ flag: 0 });
    } else if (i + 1 == 2) {
      this.setState({ flag: 1 });
    } else if (i + 1 == 3) {
      this.setState({ flag: 2 });
    } else if (i + 1 == 4) {
      this.setState({ flag: 3 });
    }
  };
  style1 = { marginLeft: 300 };
  style2 = { width: 300 };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  Emails = [
    {
      sender: "ahmed",
      content: "Meeting Reschduled",
      datetime: "02-10 17:00",
      avatar: "./images/ahmed.png",
      status: true,
      read: false,
      favorite: false
    },
    {
      sender: "George",
      content: "Sick Leave",
      datetime: "10-10 07:00",
      avatar: "./images/george.png",
      status: true,
      read: false,
      favorite: false
    },
    {
      sender: "gillian",
      content: "Class cancelation",
      datetime: "02-10 17:00",
      avatar: "./images/gillian.png",
      status: true,
      read: false,
      favorite: false
    },
    {
      sender: "hania",
      content: "Enemy AC130 Above",
      datetime: "12-01 00:00",
      avatar: "./images/hania.png",
      status: true,
      read: false,
      favorite: false
    },
    {
      sender: "mariam",
      content: "Enemy AC130 Above",
      datetime: "12-01 00:00",
      avatar: "./images/mariam.png",
      status: true,
      read: false,
      favorite: false
    },
    {
      sender: "robert",
      content: "Enemy AC130 Above",
      datetime: "12-01 00:00",
      avatar: "./images/robert.png",
      status: true,
      read: false,
      favorite: false
    }
  ];
  handleDelete = i => {
    this.Emails[i].status = false;
    this.setState({ del: !this.state.del });
  };
  handleRead = i => {
    this.Emails[i].read = true;
    this.setState({ read: !this.state.read });
  };
  handleFavorite = i => {
    this.Emails[i].favorite = !this.state.favorite;
    this.setState({ favorite: !this.state.favorite });
  };
  render() {
    const drawer = (
      <div style={this.style2}>
        <Divider />
        <List style={{ backgroundColor: "lightGrey" }}>
          {["Email", "Trash", "Important", "Spam"].map((text, index) => (
            <ListItem button onClick={() => this.handleClick(index)} key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <InboxIcon />
                ) : index === 1 ? (
                  <DeleteSweepIcon />
                ) : index === 2 ? (
                  <StarIcon />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );
    return (
      <React.Fragment>
        {this.state.open ? (
          <Drawer anchor="left" variant="permanent" open>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h6" noWrap>
                CP3170
              </Typography>
            </div>

            {this.state.open ? drawer : null}
          </Drawer>
        ) : null}

        <AppBar style={this.style1} position="permanent">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>

        <Container style={{ marginLeft: 300 }}>
          {this.state.flag === 0 ? (
            <Comp1
              Emails={this.Emails}
              onDel={this.handleDelete}
              onRead={this.handleRead}
              onFav={this.handleFavorite}
            />
          ) : this.state.flag === 1 ? (
            <Comp2
              Emails={this.Emails}
              onDel={this.handleDelete}
              onRead={this.handleRead}
            />
          ) : this.state.flag === 2 ? (
            <Comp3
              Emails={this.Emails}
              onDel={this.handleDelete}
              onRead={this.handleRead}
            />
          ) : (
            <Comp4 />
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
