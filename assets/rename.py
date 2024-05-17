import json
import os

# with open('/Users/macbookpro/Documents/repo/mipymes/assets/json/products.json', 'r') as j:
#     myData = json.load(j)

ejemplo_dir = "/Users/macbookpro/Documents/repo/mipymes/assets/img/products/iremove"
content = os.listdir(ejemplo_dir)

i = []

for fichero in content:
    if os.path.isfile(os.path.join(ejemplo_dir, fichero)) and fichero.endswith(".png"):
        s = fichero.split("-")[2].split('.')[0]
        i.append(int(s))
        
        
notListed = []        
for x in range(1, 105):
    if not x in i:
         notListed.append(x)
         
# i.sort()
print(notListed)
# for i in myData:
# for fichero in content:
#     if os.path.isfile(os.path.join(ejemplo_dir, fichero)) and fichero.endswith('.png'):
#         s = fichero.split('-')[1]
#         fit = os.path.join(ejemplo_dir, fichero)
#         if int(i['id']) == int(s):
#             os.rename(fit, os.path.join(ejemplo_dir, i['img_name']))
