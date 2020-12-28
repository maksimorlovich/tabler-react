import * as React from "react";
import { Modal, Grid, Avatar, Form } from "tabler-react";

export interface SimpleFormModalProps {
  show: boolean;
  onDismiss: () => void;
}

interface State {
  name: string;
  emptyName: boolean;
}

const emptyNameError = "Please enter your name!";

class SimpleFormModal extends React.Component<SimpleFormModalProps, State> {
  state = {
    name: "",
    emptyName: false,
  };

  shouldComponentUpdate(nextProps: SimpleFormModalProps, nextState: State) {
    const needsUpdate =
      nextProps.show !== this.props.show ||
      nextState.name !== this.state.name ||
      nextState.emptyName !== this.state.emptyName;
    return needsUpdate;
  }

  addTeamClickHandler = async (): Promise<boolean> => {
    if (this.state.name.length === 0) {
      this.setState({ emptyName: true });
      return false;
    } else {
      return true;
    }
  };

  nameChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    this.setState({
      name: newName,
      emptyName: newName.length === 0,
    });
  };

  onDismiss = () => {
    this.setState({ name: "", emptyName: false });
    this.props.onDismiss();
  };

  render() {
    return (
      <Modal show={this.props.show} onDismiss={this.onDismiss}>
        <Modal.Header title="Add a new team" closeButton />
        <Modal.Body>
          <Grid.Row mb={3} className="align-items-end">
            <Grid.Col auto ignoreCol>
              <Avatar upload rounded icon="plus" />
            </Grid.Col>
            <Grid.Col>
              <Form.Group label="Name">
                <Form.Input
                  error={this.state.emptyName ? emptyNameError : undefined}
                  value={this.state.name}
                  onChange={this.nameChangedHandler}
                />
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
          <Form.Group label="Additional info">
            <Form.Textarea />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button color="white" className="mr-auto">
            Close
          </Modal.Button>
          <Modal.Button
            color="primary"
            onClickDismiss={this.addTeamClickHandler}
          >
            Add Team
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SimpleFormModal;
