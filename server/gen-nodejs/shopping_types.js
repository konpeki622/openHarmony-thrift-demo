//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
const thrift = require('thrift');
const Thrift = thrift.Thrift;
const Int64 = require('node-int64');


const ttypes = module.exports = {};
const Item = module.exports.Item = class {
  constructor(args) {
    this.name = null;
    this.number = null;
    if (args) {
      if (args.name !== undefined && args.name !== null) {
        this.name = args.name;
      }
      if (args.number !== undefined && args.number !== null) {
        this.number = args.number;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.name = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.DOUBLE) {
          this.number = input.readDouble();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Item');
    if (this.name !== null && this.name !== undefined) {
      output.writeFieldBegin('name', Thrift.Type.STRING, 1);
      output.writeString(this.name);
      output.writeFieldEnd();
    }
    if (this.number !== null && this.number !== undefined) {
      output.writeFieldBegin('number', Thrift.Type.DOUBLE, 2);
      output.writeDouble(this.number);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const Param = module.exports.Param = class {
  constructor(args) {
    this.code = null;
    this.q = null;
    this.callback = null;
    if (args) {
      if (args.code !== undefined && args.code !== null) {
        this.code = args.code;
      }
      if (args.q !== undefined && args.q !== null) {
        this.q = args.q;
      }
      if (args.callback !== undefined && args.callback !== null) {
        this.callback = args.callback;
      }
    }
  }

  read (input) {
    input.readStructBegin();
    while (true) {
      const ret = input.readFieldBegin();
      const ftype = ret.ftype;
      const fid = ret.fid;
      if (ftype == Thrift.Type.STOP) {
        break;
      }
      switch (fid) {
        case 1:
        if (ftype == Thrift.Type.STRING) {
          this.code = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        case 2:
        if (ftype == Thrift.Type.STRING) {
          this.q = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        case 3:
        if (ftype == Thrift.Type.STRING) {
          this.callback = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
        default:
          input.skip(ftype);
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  }

  write (output) {
    output.writeStructBegin('Param');
    if (this.code !== null && this.code !== undefined) {
      output.writeFieldBegin('code', Thrift.Type.STRING, 1);
      output.writeString(this.code);
      output.writeFieldEnd();
    }
    if (this.q !== null && this.q !== undefined) {
      output.writeFieldBegin('q', Thrift.Type.STRING, 2);
      output.writeString(this.q);
      output.writeFieldEnd();
    }
    if (this.callback !== null && this.callback !== undefined) {
      output.writeFieldBegin('callback', Thrift.Type.STRING, 3);
      output.writeString(this.callback);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
