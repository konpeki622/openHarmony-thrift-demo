//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
const thrift = require('thrift');
const Thrift = thrift.Thrift;
const Int64 = require('node-int64');


const ttypes = require('./shopping_types');
//HELPER FUNCTIONS AND STRUCTURES

const ShopService_getShopping_args = class {
  constructor(args) {
    this.p = null;
    if (args) {
      if (args.p !== undefined && args.p !== null) {
        this.p = new ttypes.Param(args.p);
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
        if (ftype == Thrift.Type.STRUCT) {
          this.p = new ttypes.Param();
          this.p.read(input);
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
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
    output.writeStructBegin('ShopService_getShopping_args');
    if (this.p !== null && this.p !== undefined) {
      output.writeFieldBegin('p', Thrift.Type.STRUCT, 1);
      this.p.write(output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const ShopService_getShopping_result = class {
  constructor(args) {
    this.success = null;
    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = Thrift.copyList(args.success, [ttypes.Item]);
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
        case 0:
        if (ftype == Thrift.Type.LIST) {
          this.success = [];
          const _rtmp31 = input.readListBegin();
          const _size0 = _rtmp31.size || 0;
          for (let _i2 = 0; _i2 < _size0; ++_i2) {
            let elem3 = null;
            elem3 = new ttypes.Item();
            elem3.read(input);
            this.success.push(elem3);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
        case 0:
          input.skip(ftype);
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
    output.writeStructBegin('ShopService_getShopping_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.LIST, 0);
      output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
      for (let iter4 in this.success) {
        if (this.success.hasOwnProperty(iter4)) {
          iter4 = this.success[iter4];
          iter4.write(output);
        }
      }
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  }

};
const ShopServiceClient = exports.Client = class ShopServiceClient {
  constructor(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }
  seqid () { return this._seqid; }
  new_seqid () { return this._seqid += 1; }

  getShopping (p) {
    this._seqid = this.new_seqid();
    const self = this;
    return new Promise((resolve, reject) => {
      self._reqs[self.seqid()] = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      self.send_getShopping(p);
    });
  }

  send_getShopping (p) {
    const output = new this.pClass(this.output);
    const params = {
      p: p
    };
    const args = new ShopService_getShopping_args(params);
    try {
      output.writeMessageBegin('getShopping', Thrift.MessageType.CALL, this.seqid());
      args.write(output);
      output.writeMessageEnd();
      return this.output.flush();
    }
    catch (e) {
      delete this._reqs[this.seqid()];
      if (typeof output.reset === 'function') {
        output.reset();
      }
      throw e;
    }
  }

  recv_getShopping (input, mtype, rseqid) {
    const callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      const x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    const result = new ShopService_getShopping_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('getShopping failed: unknown result');
  }
};
const ShopServiceProcessor = exports.Processor = class ShopServiceProcessor {
  constructor(handler) {
    this._handler = handler;
  }
  process (input, output) {
    const r = input.readMessageBegin();
    if (this['process_' + r.fname]) {
      return this['process_' + r.fname].call(this, r.rseqid, input, output);
    } else {
      input.skip(Thrift.Type.STRUCT);
      input.readMessageEnd();
      const x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
      output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
      x.write(output);
      output.writeMessageEnd();
      output.flush();
    }
  }
  process_getShopping (seqid, input, output) {
    const args = new ShopService_getShopping_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.getShopping.length === 1) {
      Promise.resolve(this._handler.getShopping.bind(this._handler)(
        args.p
      )).then(result => {
        const result_obj = new ShopService_getShopping_result({success: result});
        output.writeMessageBegin("getShopping", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }).catch(err => {
        let result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getShopping", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    } else {
      this._handler.getShopping(args.p, (err, result) => {
        let result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new ShopService_getShopping_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("getShopping", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getShopping", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  }
};
