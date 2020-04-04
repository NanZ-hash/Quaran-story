class CreateChapters < ActiveRecord::Migration[5.2]
  def change
    create_table :chapters do |t|
      t.references :story, foreign_key: true
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
