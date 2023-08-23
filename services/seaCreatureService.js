const database = require("../models/index");

class seaCreatureService {
  uploadSC = async (data) => {
    // const existingRecord = await database.SeaCreature.findOne({ where: {name: data.name}})
    // if(existingRecord)
    // {
    //     console.log("dữ liệu cập nhật")
    //     return await database.SeaCreature.update(data,{ where: {name: data.name}})
    // } else {
    //     console.log("dữ liệu tạo mới")
    //     return await database.SeaCreature.create(data);
    // }

    const id = data.seaCreatureId; // Lấy ID từ dữ liệu (nếu có)
    if (id) {
      // Nếu có ID, kiểm tra xem bản ghi có tồn tại dựa trên ID
      const existingRecord = await database.SeaCreature.findByPk(id);
      if (existingRecord) {
        // Nếu bản ghi tồn tại, thực hiện cập nhật (chỉnh sửa)
        console.log("Dữ liệu đã được cập nhật.");
        return await database.SeaCreature.update(data, {
          where: { seaCreatureId: id },
        });
      } else {
        console.log("Không tìm thấy bản ghi với ID đã cung cấp.");
      }
    } else {
      // Nếu không có ID, tạo mới bản ghi
      console.log("Dữ liệu đã được tạo mới.");
      return await database.SeaCreature.create(data);
    }
  };
  removeSC = async(data) => {
    const existingRecord = await database.SeaCreature.findOne({seaCreatureId: data})
    if(existingRecord){
      return await database.SeaCreature.destroy({where: {seaCreatureId: data}})
    } else {
      return "WRONG"
    }
  }
}

module.exports = new seaCreatureService();
