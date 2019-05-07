# ![LOGO](logo.png) Handwrytten **flow**ground Connector

## Description

A generated **flow**ground connector for the Handwrytten API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/handwrytten.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:42:16+03:00

## API Description

This is the Handwrytten API for sending cards written in the handwriting of your choice.
Using this api, you can send cards to users.  You can also customize cards with logos, which
can be saved and then used like any other card in the system.
For a "sandbox" account, please contact contact@handwrytten.com
To move from credit card per-transaction to monthly invoicing, also contact us.
[https://www.handwrytten.com](https://www.handwrytten.com)


## Authorization

This API does not require authorization.

## Actions

### Logs in to an existing account

*Tags:* `auth`

### changes a user's password

*Tags:* `auth`

### logs out a session uid

*Tags:* `auth`

### Registers a new account

*Tags:* `auth`

### resets a user's password

*Tags:* `auth`

### Create a new custom card

*Tags:* `customizer`

### Lists information on cards

> Filterable card list.  If called with UID will also provide user-specific cards.

*Tags:* `cards`

### Lists information on cards

> Simple listing of cards.  No filters can be applied.

*Tags:* `cards`

### upload logo or cover image for card

*Tags:* `customizer`

### Provides full information on a specific card

> Full card details

*Tags:* `cards`

### Lists the countries to which Handwritten can mail, their associated country ID and any costs

*Tags:* `countries`

### Lists Handwryting styles available for use

*Tags:* `fonts`

### Lists fonts available for use with the card customizer

*Tags:* `customizer`

### Lists information on gift cards

> Returns images and details (and associated denominations) of all gift cards

*Tags:* `giftCards`

### Lists information on gift cards

> Returns images and details (and associated denominations) of all gift cards

*Tags:* `giftCards`

### sends an order in a single step.  This is much easier than using other order commands

> Sends an order in one step.  No need to create then process order.  Optionally include a gift card.

*Tags:* `orders`

### gets the user's return address information

*Tags:* `profile`

### deletes an existing recipient address

*Tags:* `address`

### add a new recipient address

*Tags:* `address`

### list the addresses in the user's account

*Tags:* `address`

### update the user's return address information

*Tags:* `profile`

### updates an existing new recipient address

*Tags:* `address`

### List template categories

> Lists the common template categories of all users. As you are not logged in, this is what you are limited to.

*Tags:* `templates`

### List template categories

> Lists the template categories of all users. By passing the optional UID, any custom template categories are also available.

*Tags:* `templates`

### Creates a New Template in the User's Account

> Creates a new Template in the User's Account

*Tags:* `templates`

### Deletes a users template

> Deletes a template in the User's Account

*Tags:* `templates`

### List template categories

> Lists the common template categories of all users. As you are not logged in, this is what you are limited to.

*Tags:* `templates`

### List template categories

> Lists the template categories of all users. By passing the optional UID, any custom template categories are also available.

*Tags:* `templates`

### Updates an Existing Template in the User's Account

*Tags:* `templates`

### Get all info on a template

> Provides all details on a template

*Tags:* `templates`

## License

**flow**ground :- Telekom iPaaS / handwrytten-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
