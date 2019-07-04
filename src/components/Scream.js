/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//material ui imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex"
  }
};

class Scream extends Component {
  render() {
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      }
    } = this.props;
    return (
      <Card>
        <CardMedia image={""} title="Profile Image" />
        <CardContent>
          <Typography variant="h5" color="primary">
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt._seconds}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
